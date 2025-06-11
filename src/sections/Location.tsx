import { MapPin, Phone, Clock } from "lucide-react";
export default function Location() {
    return (
        <section className="py-12" id="location">
                <div>
                    <h2 className="text-center text-3xl font-medium font-luckiestGuy py-2">
                        {" "}
                        Drop By and Join The Party
                    </h2>
                </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4">
                <div className="overflow-hidden rounded-xl py-2 shadow-lg h-80 md:h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.2159543795206!2d-79.31557459999999!3d43.685273599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc6c87084493%3A0xc25ee2236037b563!2sThe%20Groove%20Bar%20%26%20Grill!5e0!3m2!1sen!2sca!4v1749242193577!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="The Groove Location"
                    />
                </div>
                <div className="flex flex-col gap-2 font-medium">
                    <div className="flex items-center gap-4">
                        <MapPin className="text-[#FF3D5A] w-6 h-6" />
                        <span>1952 Danforth Ave, Toronto, ON M4C 1J4</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className=" text-[#FF3D5A] w-6 h-6" />
                        <span>+1 (647) 350-1917</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Clock className=" text-[#FF3D5A] w-6 h-6" />
                        <span>Mon – Sun: 4PM – 2AM</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
