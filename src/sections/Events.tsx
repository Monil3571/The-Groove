import karaokeImage from "@/assets/images/karaoke-night.jpg";
import burgerImage from "@/assets/images/beers-and-burgers.jpg";
import stageImage from "@/assets/images/StageTheGroove.jpg";
import micImage from "@/assets/images/stand-up-mic.jpg";
import poolTableImage from "@/assets/images/pool-tables.jpg";
import EventsColumn from "@/components/EventsColumn";

const events = [
    {
        name: "🎤 Friday Karaoke Night",
        icon: karaokeImage,
        description: "Sing your heart out every Friday night!",
        day: "Fridays",
        time: "8:00 PM - 12:00 AM",
    },
    {
        name: "🍔 Groove & Grub Sundays",
        icon: burgerImage,
        description: "Chill vibes, great eats, and drink deals all day.",
        day: "Sundays",
        time: "7:30 PM - 10:30 PM",
    },
    {
        name: "🎸 Live & Loud Wednesdays",
        icon: stageImage,
        description: "Local bands bring the house down midweek.",
        day: "Wednesdays",
        time: "9:00 PM - 1:00 AM",
    },
    {
        name: "🎙️ Open Mic Comedy Night",
        icon: micImage,
        description: "Step up, grab the mic, and crack some laughs.",
        day: "Thursday",
        time: "6:00 PM - 10:00 PM",
    },
    {
        name: "🎯 Pool & Pitcher Tuesdays",
        icon: poolTableImage,
        description: "Compete in casual pool tourneys and share a pitcher.",
        day: "Tuesdays",
        time: "7:00 PM - 9:00 PM",
    },
];

export type EventsType = typeof events;

export default function Events() {
    return (
        <section className="py-20 overflow-hidden" id="events">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <h2 className="text-5xl font-medium mt-6">
                            What’s Happening at{" "}
                            <span className="text-accent font-bold">The Groove</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Catch the vibe — from karaoke nights to live tunes,
                            there’s always something going on.
                        </p>
                    </div>
                    <div className="h-[500px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <EventsColumn events={events} />
                        <EventsColumn
                            events={events.slice().reverse()}
                            reverse
                            className="hidden md:flex"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
