import { ChevronRight, Folder } from "lucide-react";
import { MockCategory, MockCourse } from "@/data/mockTestData";

interface CourseCategoryCardProps {
    category: MockCategory;
    onCourseClick: (course: MockCourse) => void;
}

const CourseCategoryCard = ({ category, onCourseClick }: CourseCategoryCardProps) => {
    return (
        <div className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="p-6 pb-4 border-b border-gray-50 bg-gradient-to-b from-gray-50/50 to-white">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 bg-white shadow-sm rounded-xl border border-gray-100 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <Folder className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-purple-600 transition-all">
                        {category.name}
                    </h3>
                </div>
                <p className="text-xs text-gray-500 font-medium px-1">
                    {category.courses.length} Courses Available
                </p>
            </div>

            <div className="p-4 flex-1 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                <div className="space-y-2">
                    {category.courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => onCourseClick(course)}
                            className="w-full flex items-center justify-between hover:cursor-pointer p-3.5 rounded-xl bg-white border border-gray-100 hover:border-brand/30 hover:bg-orange-50/50 transition-all duration-300 group/item text-left shadow-sm hover:shadow-md"
                        >
                            <div className="flex-1 pr-4">
                                <h4 className="font-semibold text-gray-800 text-sm group-hover/item:text-brand transition-colors mb-0.5 line-clamp-1">
                                    {course.name}
                                </h4>
                                <p className="text-xs text-gray-400 group-hover/item:text-gray-600 line-clamp-1">
                                    {course.description}
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover/item:bg-brand group-hover/item:text-white transition-all transform group-hover/item:translate-x-1">
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-gray-50/50 border-t border-gray-100">
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand rounded-full w-2/3 opacity-20"></div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2 text-center font-medium uppercase tracking-widest">
                    Expert Curated Content
                </p>
            </div>
        </div>
    );
};

export default CourseCategoryCard;
