import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { USER_PROGRAMS } from "@/constants";
import {
  AppleIcon,
  ChevronRight,
  Clock,
  Dumbbell,
  ShieldIcon,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

const UserPrograms = () => {
  return (
    <div>
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-[#1a1315]/90 backdrop-blur-sm border border-[#ff143c33] rounded-lg overflow-hidden mb-16 shadow-[0_4px_32px_0_rgba(255,20,60,0.03)]">
          {/* HEADER BAR */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#ff143c44] bg-[#191011]/70">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <span className="text-sm text-red-500 font-medium">Program Gallery</span>
            </div>
            <div className="text-sm text-red-300 font-medium">Featured Plans</div>
          </div>

          {/* HEADER CONTENT */}
          <div className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-[0_2px_8px_rgba(255,20,60,0.08)]">
              <span className="text-neutral-100">AI-Generated </span>
              <span className="text-red-500">Programs</span>
            </h2>

            <p className="text-lg text-red-300 max-w-xl mx-auto mb-10">
              Explore personalized fitness plans our AI assistant has created for other users
            </p>

            {/* STATS */}
            <div className="flex items-center justify-center gap-16 mt-10 font-mono">
              <div className="flex flex-col items-center">
                <p className="text-3xl text-red-400 font-bold">500+</p>
                <p className="text-sm text-red-300 uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
              </div>
              <div className="w-px h-12 bg-red-600/30"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-red-400 font-bold">3min</p>
                <p className="text-sm text-red-300 uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
              </div>
              <div className="w-px h-12 bg-red-600/30"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-red-400 font-bold">100%</p>
                <p className="text-sm text-red-300 uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USER_PROGRAMS.map((program) => (
            <Card
              key={program.id}
              className="bg-[#191011]/90 backdrop-blur-sm border border-[#ff143c33] hover:border-red-500/70 transition-colors overflow-hidden shadow-[0_2px_24px_0_rgba(255,20,60,0.07)]"
            >
              {/* Card header with user info */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-red-900 bg-[#151013]/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-sm text-red-500">USER.{program.id}</span>
                </div>
                <div className="text-sm text-red-300">
                  {program.fitness_level.toUpperCase()}
                </div>
              </div>

              <CardHeader className="pt-6 px-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border border-red-700">
                    <img
                      src={program.profilePic}
                      alt={`${program.first_name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-neutral-100">
                      {program.first_name}
                      <span className="text-red-500">.exe</span>
                    </CardTitle>
                    <div className="text-sm text-red-300 flex items-center gap-2 mt-1">
                      <Users className="h-4 w-4 text-red-400" />
                      {program.age}y • {program.workout_days}d/week
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div className="px-3 py-1 bg-red-800/20 rounded border border-red-400/40 text-sm text-red-400 flex items-center gap-2 font-semibold">
                    <Sparkles className="h-4 w-4 text-red-300" />
                    {program.fitness_goal}
                  </div>
                  <div className="text-sm text-red-300 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-400" />
                    v3.5
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-5">
                {/* Program details */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 mt-0.5 shadow-none">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-neutral-100">
                          {program.workout_plan.title}
                        </h3>
                      </div>
                      <p className="text-sm text-red-300 mt-1">{program.equipment_access}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 mt-0.5">
                      <AppleIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-neutral-100">{program.diet_plan.title}</h3>
                      </div>
                      <p className="text-sm text-red-300 mt-1">
                        System optimized nutrition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 mt-0.5">
                      <ShieldIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-neutral-100">AI Safety Protocols</h3>
                      </div>
                      <p className="text-sm text-red-300 mt-1">
                        Protection systems enabled
                      </p>
                    </div>
                  </div>
                </div>
                {/* Program description */}
                <div className="mt-5 pt-5 border-t border-red-900/40">
                  <div className="text-sm text-red-300">
                    <span className="text-red-500">&gt; </span>
                    {program.workout_plan.description.substring(0, 120)}...
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-5 py-4 border-t border-red-900/40">
                <Link href={`/programs/${program.id}`} className="w-full">
                  <Button className="w-full bg-red-500 text-white hover:bg-red-600 ring-2 ring-red-700/40 rounded-md transition-all duration-200">
                    View Program Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white hover:from-red-900 hover:to-red-800 ring-2 ring-red-700 hover:ring-red-500 px-8 py-6 text-lg font-bold shadow-red-900/30 shadow-lg transition-all duration-300"
            >
              Generate Your Program
              <Sparkles className="ml-2 h-5 w-5 text-yellow-300 drop-shadow-[0_2px_4px_rgba(255,20,60,0.18)]" />
            </Button>
          </Link>
          <p className="text-red-300 mt-4">
            Join 500+ users with AI-customized fitness programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;
