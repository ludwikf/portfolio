import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    const projectId = req.nextUrl.searchParams.get("id");
    await connectMongoDB();

    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) {
      return new NextResponse("Project is already deleted", { status: 400 });
    }

    return new NextResponse("Project deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
