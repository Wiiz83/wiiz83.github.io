import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function AwardsSection() {
  return (
    <section
      id="certifications"
      className="py-12 relative"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Certifications
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <MotionWrapper key={award.name + award.date} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
                  >
                    <Trophy className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{award.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  🏢 {award.issuer}
                </p>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  📅 {award.date}
                </p>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  🌎 {award.type}
                </p>
                {award.link?.trim() && (
                  <a
                    className="text-xs text-muted-foreground mb-1 pl-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={award.link}
                  >
                    🔗 Open my certification
                  </a>
                )}
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
