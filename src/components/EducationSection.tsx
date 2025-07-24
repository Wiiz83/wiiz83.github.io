import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award, ChevronRight, ChevronDown, ListChecks } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EducationSection() {
  const [openCourses, setOpenCourses] = useState(Array(education.length).fill(false));

  return (
    <section
      id="education"
      className="py-12 relative"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Education
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`🎓 ${edu.degree}`}
              subtitle={`🌍 ${edu.location}`}
              date={`📅 ${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
              link={edu.website}
            >
              <p className="text-xs text-muted-foreground/70 mb-2">🏛️ {edu.institution}</p>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="flex items-center cursor-pointer select-none"
                    onClick={() => setOpenCourses(o => o.map((v, i) => i === index ? !v : v))}
                  >
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                      <ListChecks className="h-4 w-4 text-purple-500" />
                    </div>
                    <span className="ml-2">
                      {openCourses[index] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </span>
                    <span className="mr-1" />
                    <h4 className="text-sm font-medium">
                      Classes
                    </h4>
                  </div>
                  {openCourses[index] && (
                    <ul className="list-none ml-4 mt-3 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                  )}
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
