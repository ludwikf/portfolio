import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const { title, link, github, description, image } = await req.json();
    await connectMongoDB();

    const newProject = new Project({
      title,
      link,
      github,
      description,
      image,
    });

    const savedProject = await newProject.save();

    if (!savedProject) {
      return new NextResponse("Error saving project", { status: 400 });
    }

    return new NextResponse("Project created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
