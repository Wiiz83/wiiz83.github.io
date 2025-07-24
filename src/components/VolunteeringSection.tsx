import { volunteeringExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase, ListChecks, Award, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import MotionWrapper from "./MotionWrapper";

export default function VolunteeringSection() {
  const [openResponsibilities, setOpenResponsibilities] = useState(Array(volunteeringExperience.length).fill(false));

  return (
    <section
      id="volunteering"
      className="py-12 relative"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🫂
            </motion.span>{" "}
            Volunteering Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {volunteeringExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`👨‍💻 ${job.position} | ${job.company}`}
              subtitle={`🌍 ${job.location}`}
              date={`📅 ${job.period}`}
              isLast={index === volunteeringExperience.length - 1}
              index={index}
              link={job.website}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-medium">Context</h4>
                </div>
                <p className="text-muted-foreground relative pl-6">{job.context}</p>
              </motion.div>
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center cursor-pointer select-none"
                  onClick={() => setOpenResponsibilities(o => o.map((v, i) => i === index ? !v : v))}
                >
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    <ListChecks className="h-4 w-4 text-purple-500" />
                  </div>
                  <span className="ml-2">
                    {openResponsibilities[index] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                  <span className="mr-1" />
                  <h4 className="text-sm font-medium">Responsibilities</h4>
                </div>
                {openResponsibilities[index] && (
                  <ul className="list-none ml-4 mt-3 space-y-2 text-sm">
                    {job.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
