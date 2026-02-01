<script lang="ts">
    import { activeScheduleDay, toast } from "../../lib/stores";
    import { onMount } from 'svelte';
    import BookingFacade from '../../lib/booking';
    import EventBus, { BookingEventType } from '../../lib/events';
    import ConfirmModal from '../ui/ConfirmModal.svelte';
    
    const days = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT"];
    
    let selectedDay = $state("SENIN");
    let scheduleData = $state<any[]>([]);
    let confirmModalOpen = $state(false);
    let selectedClass = $state<any>(null);
    let currentMemberId = 'member_001'; // Mock current user
    
    const bookingFacade = BookingFacade.getInstance();
    const eventBus = EventBus.getInstance();
    
    activeScheduleDay.subscribe((day) => {
        selectedDay = day;
        loadScheduleData();
    });
    
    function selectDay(day: string) {
        selectedDay = day;
        activeScheduleDay.set(day);
    }
    
    function loadScheduleData() {
        scheduleData = bookingFacade.getAvailableClasses(selectedDay, currentMemberId);
    }
    
    function handleDaftarClick(classItem: any) {
        selectedClass = classItem;
        confirmModalOpen = true;
    }
    
    async function handleConfirmBooking() {
        if (!selectedClass) return;
        
        try {
            const result = await bookingFacade.bookClass({
                classId: selectedClass.id,
                memberId: currentMemberId
            });
            
            if (result.success) {
                toast.show(result.message, 'success');
                loadScheduleData(); // Refresh the schedule
            } else {
                toast.show(result.message, 'error');
            }
        } catch (error) {
            toast.show('Terjadi kesalahan saat melakukan pendaftaran', 'error');
        }
    }
    
    function handleCancelBooking() {
        confirmModalOpen = false;
        selectedClass = null;
    }
    
    // Subscribe to events for real-time updates
    onMount(() => {
        // Only initialize on client-side
        if (typeof window !== 'undefined') {
            loadScheduleData();
            
            // Subscribe to booking events
            eventBus.subscribe(BookingEventType.BOOKING_CREATED, (event) => {
                console.log('Booking created:', event.data);
            });
            
            eventBus.subscribe(BookingEventType.SCHEDULE_UPDATED, (event) => {
                console.log('Schedule updated:', event.data);
            });
            
            eventBus.subscribe(BookingEventType.CLASS_FULL, (event) => {
                toast.show(`Kelas ${event.data.className} sudah penuh!`, 'info');
            });
        }
    });
</script>

<section id="jadwal" class="schedule">
    <div class="container">
        <h2 class="section-title">Jadwal Kelas Hari Ini</h2>

        <div class="schedule-card">
            <!-- Day Tabs -->
            <div class="day-tabs" role="tablist" aria-label="Pilih hari">
                {#each days as day}
                    <button
                        class="day-tab"
                        class:active={selectedDay === day}
                        onclick={() => selectDay(day)}
                        role="tab"
                        aria-selected={selectedDay === day}
                        aria-controls="schedule-panel"
                    >
                        {day}
                    </button>
                {/each}
            </div>

            <!-- Schedule List -->
            <div
                id="schedule-panel"
                class="schedule-list"
                role="tabpanel"
                aria-label={`Jadwal hari ${selectedDay}`}
            >
                {#each scheduleData as item}
                    <div class="schedule-item">
                        <div class="schedule-info">
                            <span class="schedule-time">{item.time}</span>
                            <div class="schedule-details">
                                <h4 class="schedule-class">{item.className}</h4>
                                <p class="schedule-meta">
                                    {item.coach} • {item.duration}
                                </p>
                            </div>
                        </div>
                        {#if item.isBookedByMember}
                            <span class="badge-booked">TERDAFTAR</span>
                        {:else if item.available}
                            <button class="btn-schedule" onclick={() => handleDaftarClick(item)}>Daftar</button>
                        {:else}
                            <span class="badge-full">PENUH</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- Confirmation Modal -->
<ConfirmModal 
    bind:isOpen={confirmModalOpen}
    className={selectedClass?.className || ''}
    coach={selectedClass?.coach || ''}
    time={selectedClass?.time || ''}
    onConfirm={handleConfirmBooking}
    onCancel={handleCancelBooking}
/>

<style>
    .schedule {
        display: none;
        padding: 6rem 0;
    }

    @media (min-width: 1024px) {
        .schedule {
            display: block;
        }
    }

    .section-title {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 3rem;
    }

    .schedule-card {
        background: var(--color-surface);
        border: 1px solid var(--color-border-light);
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: var(--shadow-xl);
    }

    /* Day Tabs */
    .day-tabs {
        display: flex;
        background: var(--color-bg-secondary);
        border-bottom: 1px solid var(--color-border-light);
    }

    .day-tab {
        flex: 1;
        padding: 1.25rem;
        font-weight: 700;
        color: var(--color-text-muted);
        border-bottom: 3px solid transparent;
        transition: all 0.15s;
    }

    .day-tab:hover {
        color: var(--color-primary);
    }

    .day-tab.active {
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }

    /* Schedule List */
    .schedule-list {
        display: flex;
        flex-direction: column;
    }

    .schedule-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem;
        border-bottom: 1px solid var(--color-border-light);
        transition: background 0.15s;
    }

    .schedule-item:last-child {
        border-bottom: none;
    }

    .schedule-item:hover {
        background: var(--color-bg);
    }

    .schedule-info {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .schedule-time {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-primary);
        min-width: 5rem;
    }

    .schedule-class {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .schedule-meta {
        font-size: 0.875rem;
        color: var(--color-text-tertiary);
    }

    .btn-schedule {
        padding: 0.5rem 1.5rem;
        background: var(--color-primary);
        color: white;
        font-weight: 700;
        border-radius: 9999px;
        transition: all 0.15s;
    }

    .btn-schedule:hover {
        background: var(--color-primary-hover);
    }

    .badge-full {
        padding: 0.5rem 1rem;
        background: #fee2e2;
        color: #dc2626;
        font-size: 0.875rem;
        font-weight: 700;
        border-radius: 9999px;
    }
    
    .badge-booked {
        padding: 0.5rem 1rem;
        background: rgba(34, 197, 94, 0.1);
        color: #22c55e;
        font-size: 0.875rem;
        font-weight: 700;
        border-radius: 9999px;
    }
</style>
