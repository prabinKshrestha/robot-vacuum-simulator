export default function Information({ onConfigurationClick }) {
    return <>
        <div className="w-full px-20 py-10 pt-14">
            <div className="w-full flex justify-center">
                <div className="shadow-lg w-2/3 bg-white px-10 py-10 rounded-3xl">
                    <h1 className="text-4xl font-bold text-center">
                        <span className=" border-orange-500 border-b-8 px-4">Why this project?</span>
                    </h1>
                    <div className="mt-14 text-justify text-base">
                        <p>
                            During my studies in Master of Applied Science in Software Engineering at Memorial University of Newfoundland, I encountered an assignment question by Professor Reza Sahidi related to my MASC course.
                            Although this solution is not an exact match, it shares similarities with the question.
                            Instead of providing a solution on standard console, I saw an opportunity to make it more engaging by creating a visual solution.</p>
                        <p className="pt-4">
                            This was also the perfect opportunity for me to dive into the world of React, a technology I had been eager to learn.
                            I decided to write a code solution, implement it on a web platform, and, in the process, acquire valuable React skills.
                            This experience not only helped me address the assignment effectively but also allowed me to expand my knowledge in a practical and hands-on way.</p>
                    </div>
                </div>
            </div>

            <div className="my-10 text-base w-2/3 mx-auto">
                <p className="pt-10 not-italic text-justify">
                    The following is the problem statement (<span className="italic">Sahidi, R. (2023). Advance Concurrent Programming [Course assignment]. Memorial University of Newfoundland.</span>).
                    The instructions is to use configuration files for robots related configs, but instead, I employed form inputs to customize the settings for our vacuum robot simulation.
                    As mentioned earlier, this approach allows us to not only visualize the movements of our robots but also observe any collisions that may occur.
                </p>
            </div>

            <div className="mt-16 text-sm p-10 w-2/3 mx-auto  text-justify italic rounded shadow overflow-hidden bg-white ">
                <p className="text-center text-lg not-italic">
                    <span className="border-orange-500 border-b-2 px-2 font-bold">Problem</span>
                </p>
                <p className="py-2 pt-8">
                    For this assignment you will simulate a group of robot vacuums cleaning a dirty room. You can assume that
                    the robot can clean a 0.5 m x 0.5 m section of the room every 2 seconds, and you may assume the room is
                    divided into a grid of 0.5 m x 0.5 m cells. For simplicity, you may assume the room is square in shape so
                    that its length and width are identical.
                </p>
                <p className="py-2">
                    For the simulation, the dimensions of the room, which can be assumed to be in units of 0.5 m x 0.5 m cells, are given
                    in a text file named room.txt which consists of only one line with one integer M. Thel
                    integer is assumed to be odd, so that both the length and width of the room consist of that odd number of
                    cells.
                </p >
                <p className="py-2">
                    You may also assume there is another text file, named robots.txt, the first line of which consists of a single
                    positive integer n which gives the number of robot vacuums to simulate, followed by n¡1 lines, each of which
                    consists of an initial position of the robot vacuum (horizontal coordinate followed by a space and then the
                    vertical coordinate), followed by another space, and then the initial direction of travel of the robot vacuum
                    encoded as a single uppercase character: U for up, L for left, D for down and R for right. You may assume
                    there is initially at most one robot vacuum per room cell. If there is not, your program should output the
                    following message to standard output INPUT ERROR and exit before conducting the simulation.

                </p>
                <p className="py-2">        Each robot is assumed to follow a counter-clockwise spiral pattern, starting in the initial direction. To ensure
                    that the simulation terminates, you may assume there is always a robot vacuum which starts at the centre
                    grid cell of the room, and also travels in a counterclockwise spiral pattern. You may assume the initial
                    direction of travel of the centre robot vacuum is upwards.


                </p>
                <p className="py-2">        The simulation will be clock-driven so that the positions of all robot vacuums will be updated
                    at each
                    iteration, which will consist of 2 seconds of the simulation. If two vacuums occupy the same cell at any
                    iteration of the algorithm, then the program should terminate and output to standard output the following message:
                    *COLLISION AT CELL (m;n)*, where m is the horizontal cell number (an integer from 0 to M ¡1,
                    increasing from left to right), and n is the vertical cell number (another integer from 0 to M ¡ 1, increasing
                    from bottom to top). If a robot is at the boundary of the room and about to hit a wall, then it should turn
                    counterclockwise and continue travelling counterclockwise along the walls of the room in a circular loop, and
                    no longer a spiral pattern. If the entire room becomes clean before any collision occurs, then the following message
                    should be output to standard output *ROOM CLEAN*, after which the simulation should end.
                </p>
            </div>
            <div className="text-center py-10">
                <button
                    className="shadow bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded"
                    type="button"
                    onClick={onConfigurationClick}
                >
                    Configure
                </button>
            </div>
        </div>
    </>
}

