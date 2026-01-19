import {
  AlertCircle,
  TrendingDown,
  HelpCircle,
} from "lucide-react";
import { motion } from "motion/react";

export function Problem() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Revenue grows, profit shrinks",
      description:
        "You increase ad spend, sales go up, but profit disappears. Without tracking real costs, you're scaling losses.",
    },
    {
      icon: HelpCircle,
      title: "ROAS doesn't tell the full story",
      description:
        "A 4x ROAS looks great until you factor in COGS, shipping, fees, and fulfillment. What's the actual contribution profit?",
    },
    {
      icon: AlertCircle,
      title: "No clear cause and effect",
      description:
        "Profit changed. But why? Was it the price increase, the promotion, the budget shift, or something else entirely?",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] border-y border-border overflow-hidden">
      {/* Flowing cubes pattern from bottom-right to center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15]">
        {[
          // Bottom-right dense origin cluster
          [
            "bottom-[3rem]",
            "right-[3rem]",
            "w-5 h-5",
            "bg-white/40",
          ],
          [
            "bottom-[3.5rem]",
            "right-[5rem]",
            "w-4 h-4",
            "bg-white/30",
          ],
          [
            "bottom-[2.5rem]",
            "right-[7rem]",
            "w-6 h-6",
            "bg-white/35",
          ],
          [
            "bottom-[4.5rem]",
            "right-[4rem]",
            "w-4 h-4",
            "bg-white/25",
          ],
          [
            "bottom-[5.5rem]",
            "right-[6rem]",
            "w-3 h-3",
            "bg-white/22",
          ],
          [
            "bottom-[2rem]",
            "right-[9rem]",
            "w-3 h-3",
            "bg-white/20",
          ],
          [
            "bottom-[6.5rem]",
            "right-[8rem]",
            "w-5 h-5",
            "bg-white/24",
          ],
          [
            "bottom-[1.5rem]",
            "right-[11rem]",
            "w-4 h-4",
            "bg-white/18",
          ],
          [
            "bottom-[7.5rem]",
            "right-[3.5rem]",
            "w-3 h-3",
            "bg-white/20",
          ],
          [
            "bottom-[8.5rem]",
            "right-[5.5rem]",
            "w-4 h-4",
            "bg-white/18",
          ],

          // Flow path toward center (more cubes, tighter spacing)
          [
            "bottom-[8rem]",
            "right-[12rem]",
            "w-5 h-5",
            "bg-white/28",
          ],
          [
            "bottom-[9.5rem]",
            "right-[14rem]",
            "w-4 h-4",
            "bg-white/26",
          ],
          [
            "bottom-[11rem]",
            "right-[16rem]",
            "w-6 h-6",
            "bg-white/22",
          ],
          [
            "bottom-[12.5rem]",
            "right-[18rem]",
            "w-4 h-4",
            "bg-white/24",
          ],
          [
            "bottom-[14rem]",
            "right-[20rem]",
            "w-3 h-3",
            "bg-white/20",
          ],
          [
            "bottom-[15.5rem]",
            "right-[22rem]",
            "w-5 h-5",
            "bg-white/22",
          ],
          [
            "bottom-[17rem]",
            "right-[24rem]",
            "w-4 h-4",
            "bg-white/20",
          ],
          [
            "bottom-[18.5rem]",
            "right-[26rem]",
            "w-6 h-6",
            "bg-white/18",
          ],
          [
            "bottom-[20rem]",
            "right-[28rem]",
            "w-4 h-4",
            "bg-white/20",
          ],

          // Mid area around center-right
          [
            "bottom-[21rem]",
            "right-[32%]",
            "w-5 h-5",
            "bg-white/20",
          ],
          [
            "bottom-[23rem]",
            "right-[40%]",
            "w-4 h-4",
            "bg-white/18",
          ],
          [
            "bottom-[24.5rem]",
            "right-[45%]",
            "w-6 h-6",
            "bg-white/16",
          ],
          [
            "bottom-[26rem]",
            "right-[50%]",
            "w-4 h-4",
            "bg-white/18",
          ],

          // Upper flow elements (very subtle)
          ["top-[52%]", "left-[42%]", "w-4 h-4", "bg-white/16"],
          ["top-[44%]", "left-[36%]", "w-3 h-3", "bg-white/18"],
          ["top-[38%]", "left-[33%]", "w-5 h-5", "bg-white/14"],
          ["top-[32%]", "left-[38%]", "w-4 h-4", "bg-white/14"],
          ["top-[28%]", "left-[44%]", "w-3 h-3", "bg-white/12"],

          // Extra tiny speckles for density
          [
            "bottom-[6rem]",
            "right-[15rem]",
            "w-2 h-2",
            "bg-white/14",
          ],
          [
            "bottom-[10rem]",
            "right-[19rem]",
            "w-2 h-2",
            "bg-white/14",
          ],
          [
            "bottom-[14rem]",
            "right-[23rem]",
            "w-2 h-2",
            "bg-white/12",
          ],
          [
            "bottom-[18rem]",
            "right-[27rem]",
            "w-2 h-2",
            "bg-white/12",
          ],
          [
            "bottom-[22rem]",
            "right-[46%]",
            "w-2 h-2",
            "bg-white/10",
          ],
          ["top-[48%]", "left-[50%]", "w-2 h-2", "bg-white/10"],
          ["top-[36%]", "left-[46%]", "w-2 h-2", "bg-white/10"],
          ["top-[30%]", "left-[40%]", "w-2 h-2", "bg-white/10"],
        ].map(([posA, posB, size, color], i) => (
          <div
            key={i}
            className={`absolute ${posA} ${posB} ${size} ${color} rotate-45 rounded-[2px]`}
          />
        ))}
      </div>
      {/* Flowing cubes pattern from top-left to center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.20]">
        {[
          // Top-left dense origin cluster
          [
            "top-[3rem]",
            "left-[3rem]",
            "w-5 h-5",
            "bg-white/35",
          ],
          [
            "top-[4rem]",
            "left-[5rem]",
            "w-4 h-4",
            "bg-white/28",
          ],
          [
            "top-[2.5rem]",
            "left-[7rem]",
            "w-6 h-6",
            "bg-white/32",
          ],
          [
            "top-[5.5rem]",
            "left-[4rem]",
            "w-4 h-4",
            "bg-white/25",
          ],
          [
            "top-[6.5rem]",
            "left-[6rem]",
            "w-3 h-3",
            "bg-white/22",
          ],
          [
            "top-[2rem]",
            "left-[9rem]",
            "w-3 h-3",
            "bg-white/20",
          ],
          [
            "top-[7.5rem]",
            "left-[8rem]",
            "w-5 h-5",
            "bg-white/24",
          ],
          [
            "top-[1.5rem]",
            "left-[11rem]",
            "w-4 h-4",
            "bg-white/18",
          ],
          [
            "top-[8.5rem]",
            "left-[3.5rem]",
            "w-3 h-3",
            "bg-white/20",
          ],
          [
            "top-[9.5rem]",
            "left-[5.5rem]",
            "w-4 h-4",
            "bg-white/18",
          ],

          // Flow path toward center
          [
            "top-[8rem]",
            "left-[12rem]",
            "w-5 h-5",
            "bg-white/28",
          ],
          [
            "top-[9.5rem]",
            "left-[14rem]",
            "w-4 h-4",
            "bg-white/26",
          ],
          [
            "top-[11rem]",
            "left-[16rem]",
            "w-6 h-6",
            "bg-white/22",
          ],
          [
            "top-[12.5rem]",
            "left-[18rem]",
            "w-4 h-4",
            "bg-white/24",
          ],
          [
            "top-[14rem]",
            "left-[20rem]",
            "w-3 h-3",
            "bg-white/20",
          ],
          [
            "top-[15.5rem]",
            "left-[22rem]",
            "w-5 h-5",
            "bg-white/22",
          ],
          [
            "top-[17rem]",
            "left-[24rem]",
            "w-4 h-4",
            "bg-white/20",
          ],
          [
            "top-[18.5rem]",
            "left-[26rem]",
            "w-6 h-6",
            "bg-white/18",
          ],
          [
            "top-[20rem]",
            "left-[28rem]",
            "w-4 h-4",
            "bg-white/20",
          ],

          // Mid area near center-left
          [
            "top-[22rem]",
            "left-[32%]",
            "w-5 h-5",
            "bg-white/20",
          ],
          [
            "top-[24rem]",
            "left-[40%]",
            "w-4 h-4",
            "bg-white/18",
          ],
          [
            "top-[25.5rem]",
            "left-[45%]",
            "w-6 h-6",
            "bg-white/16",
          ],
          [
            "top-[27rem]",
            "left-[50%]",
            "w-4 h-4",
            "bg-white/18",
          ],

          // Tiny speckles for density
          [
            "top-[6rem]",
            "left-[15rem]",
            "w-2 h-2",
            "bg-white/14",
          ],
          [
            "top-[10rem]",
            "left-[19rem]",
            "w-2 h-2",
            "bg-white/14",
          ],
          [
            "top-[14rem]",
            "left-[23rem]",
            "w-2 h-2",
            "bg-white/12",
          ],
          [
            "top-[18rem]",
            "left-[27rem]",
            "w-2 h-2",
            "bg-white/12",
          ],
          [
            "top-[22rem]",
            "left-[46%]",
            "w-2 h-2",
            "bg-white/10",
          ],
          ["top-[30%]", "left-[50%]", "w-2 h-2", "bg-white/10"],
        ].map(([posA, posB, size, color], i) => (
          <div
            key={`tl-${i}`}
            className={`absolute ${posA} ${posB} ${size} ${color} rotate-45 rounded-[2px]`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/25 mb-6">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-white">
              The Scaling Trap
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-5 font-bold text-white">
            You Can't Scale What You Can't Measure
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Most e-commerce brands make scaling decisions with
            incomplete data — and pay the price in eroded
            margins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="relative p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/15 hover:border-white/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-bold text-white">
                      {problem.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}