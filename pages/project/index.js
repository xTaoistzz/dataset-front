import Link from "next/link"
export default function Projects(){
    return(
    <>
    <div class="bg-slate-400 p-4">
        <div class="font-bold bg-slate-600 text-white flex p-3 justify-between">
            <div class="p-3">
                This is Project Page
            </div>
            <div class="bg-violet-500 p-3 hover:bg-violet-950 rounded-full">
                <Link href="/project/create" class="">Create New Project</Link>
            </div>
        </div>
        <div class="grid grid-cols-4 text-center space-x-5 text-white m-5 flex">
            <div class=" bg-red-700 p-3">Project1</div>
            <div class=" bg-red-700 p-3">Project2</div>
            <div class=" bg-red-700 p-3">Project3</div>
            <div class=" bg-red-700 p-3">Project4</div>
        </div>
    </div>
    </>

    )
}