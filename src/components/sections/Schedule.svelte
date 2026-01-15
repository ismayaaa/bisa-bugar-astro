<script lang="ts">
    import { activeScheduleDay } from "../../lib/stores";

    const days = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT"];

    let selectedDay = $state("SENIN");

    activeScheduleDay.subscribe((day) => {
        selectedDay = day;
    });

    function selectDay(day: string) {
        selectedDay = day;
        activeScheduleDay.set(day);
    }

    const scheduleData = [
        {
            time: "07:00",
            className: "Zumba Fitness",
            coach: "Coach Aniq",
            duration: "60 Menit",
            available: true,
        },
        {
            time: "09:00",
            className: "Power Yoga",
            coach: "Coach Ismaya",
            duration: "45 Menit",
            available: true,
        },
        {
            time: "17:00",
            className: "Body Pump",
            coach: "Coach Leon",
            duration: "60 Menit",
            available: false,
        },
    ];
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
                        {#if item.available}
                            <button class="btn-schedule">Daftar</button>
                        {:else}
                            <span class="badge-full">PENUH</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

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
</style>
