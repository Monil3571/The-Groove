// "use client";
// import { Star } from "lucide-react";
// import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const testimonials = [
//     {
//         name: "David Jackson",
//         rating: 5,
//         review: "Best chicken wings I've ever had... about 30 different flavors. Great live music!",
//     },
//     {
//         name: "Katie Duval",
//         rating: 5,
//         review: "Karaoke on Saturday nights is always a blast... family-run and super friendly!",
//     },
//     {
//         name: "Brandie Mosher",
//         rating: 5,
//         review: "Creative cocktails, delicious food... Mediterranean Nachos are a MUST TRY!",
//     },
//     {
//         name: "Thomas Stavropoulos",
//         rating: 5,
//         review: "Great food, drinks, and cheap pool... definitely coming back again!",
//     },
//     {
//         name: "Andrea",
//         rating: 5,
//         review: "Most welcoming karaoke spot... food and drinks are reasonably priced!",
//     },
// ];

// export default function Testimonials() {
//     const [isHovered, setIsHovered] = useState(false);
//     const animation = useRef<AnimationPlaybackControls>();
//     const [scope, animate] = useAnimate();

//     useEffect(() => {
//         animation.current = animate(
//             scope.current,
//             { x: "-50%" },
//             { duration: 25, ease: "linear", repeat: Infinity }
//         );

//         animation.current.speed = 0.5;
//     }, []);

//     useEffect(() => {
//         if (animation.current) {
//             if (isHovered) {
//                 animation.current.speed = 0.5;
//             } else {
//                 animation.current.speed = 1;
//             }
//         }
//     });
//     return (
//         <section className="py-16">
//             <h2 className="text-3xl font-bold text-center mb-10 md:text-5xl">What People Are Saying</h2>
//             <div className="overflow-x-clip p-4 flex">
//                 <motion.div
//                     ref={scope}
//                     className="flex flex-none gap-16 pr-16 text-xl md:text-3xl font-medium group cursor-pointer"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     {Array.from({ length: 2 }).map((_, i) => (
//                         <div key={i} className="flex items-start gap-16">
//                             {testimonials.map((testimonial) => (
//                                 <div className="flex flex-col max-w-[80vw] md:max-w-[50vw]" key={testimonial.name}>
//                                     <div className="flex justify-between items-center">
//                                         <h1 className="text-accent font-bold">
//                                             {testimonial.name}
//                                         </h1>
//                                         <div className="flex">
//                                         {Array.from({
//                                             length: testimonial.rating,
//                                         }).map((_, i) => (
//                                             <Star
//                                             key={i}
//                                             className="w-5 h-5 text-yellow-400 fill-yellow-400"
//                                             />
//                                         ))}
//                                         </div>
//                                     </div>
//                                     <p className="py-2">{testimonial.review}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}

//                 </motion.div>
//             </div>
//         </section>
//     );
// }
"use client";
import { Star } from "lucide-react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "David Jackson",
    rating: 5,
    review: "Best chicken wings I've ever had... about 30 different flavors. Great live music!",
  },
  {
    name: "Katie Duval",
    rating: 5,
    review: "Karaoke on Saturday nights is always a blast... family-run and super friendly!",
  },
  {
    name: "Brandie Mosher",
    rating: 5,
    review: "Creative cocktails, delicious food... Mediterranean Nachos are a MUST TRY!",
  },
  {
    name: "Thomas Stavropoulos",
    rating: 5,
    review: "Great food, drinks, and cheap pool... definitely coming back again!",
  },
  {
    name: "Andrea",
    rating: 5,
    review: "Most welcoming karaoke spot... food and drinks are reasonably priced!",
  },
];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const animation = useRef<AnimationPlaybackControls>();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isWide = window.innerWidth >= 768;
      setIsDesktop(isWide);

      if (isWide) {
        animation.current = animate(
          scope.current,
          { x: "-50%" },
          { duration: 25, ease: "linear", repeat: Infinity }
        );
        animation.current.speed = 0.5;
      }
    }
  }, []);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1;
    }
  }, [isHovered]);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 md:text-5xl">What People Are Saying</h2>

      {/* Mobile Scrollable */}
      {!isDesktop && (
        <div className="overflow-x-auto flex gap-6 px-4 snap-x snap-mandatory scroll-smooth">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col w-[80vw] shrink-0 snap-start bg-neutral-900 rounded-3xl p-6 border border-white/10"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-accent font-bold">{testimonial.name}</h1>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="py-2 text-white/80">{testimonial.review}</p>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Sliding */}
      {isDesktop && (
        <div className="overflow-x-clip p-4 flex">
          <motion.div
            ref={scope}
            className="flex flex-none gap-16 pr-16 text-xl md:text-3xl font-medium group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-start gap-16">
                {testimonials.map((testimonial) => (
                  <div
                    className="flex flex-col max-w-[25vw] bg-neutral-900 rounded-3xl p-6 border border-white/10"
                    key={`${testimonial.name}-${i}`}
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="text-accent font-bold">{testimonial.name}</h1>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="py-2 text-white/80">{testimonial.review}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
