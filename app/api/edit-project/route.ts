import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const { title, link, github, description, image } = await req.json();
    await connectMongoDB();
    const savedProject = await Project.findByIdAndUpdate(id, {
      title: title,
      link: link,
      github: github,
      description: description,
      image: image,
    });
    if (!savedProject) {
      return new NextResponse("Updating error", { status: 400 });
    }

    return new NextResponse("Project updated", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
