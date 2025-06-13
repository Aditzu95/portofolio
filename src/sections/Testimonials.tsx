import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alin Roman",
    position: "Team Leader @ ThinSlices",
    text: "Reliable, motivated, and highly skilled. He handled tasks with minimal supervision and often helped other team members when they got stuck.",
    avatar: memojiAvatar1,
  },
  {
    name: "Cezara Pralea",
    position: "Project Manager @ ThinSlices",
    text: "Consistently delivered quality work on time, even under tight deadlines. He understood priorities, kept communication clear, and made a big impact on the delivery of key features.",
    avatar: memojiAvatar2,
  },
  {
    name: "Ungurasu Razvan",
    position: "CEO @ RaisisSoftware",
    text: "Consistently delivered his front-end tasks on time and with great attention to detail. He showed real curiosity, often asking to learn beyond his role, which made him stand out as a motivated and dependable developer",
    avatar: memojiAvatar3,
  },
  {
    name: "Costin Mazilu",
    position: "FullStack Developer @ ThinSlices",
    text: "He handled his part of the task professionally, communicated clearly, and delivered quality front-end work that integrated perfectly with the back end.",
    avatar: memojiAvatar4,
  },
  {
    name: "Razvan Racota",
    position: "Quality Assurance @ ThinSlices",
    text: "He always provided clear, detailed task descriptions and actively involved me in the testing process. Whether asking for retests or assisting with edge cases, his collaboration made QA smoother and faster.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Team Feedback"
          title="What It's Like to Work with Me"
          description="Don't just take my word for it. See what my clients have to say about my
        work"
        />
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
