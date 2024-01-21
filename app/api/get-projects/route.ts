import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const page = parseInt(req.nextUrl.searchParams.get("page")) || 1;
    const pageSize = 6;

    await connectMongoDB();

    const skip = (page - 1) * pageSize;

    const projects = await Project.find().skip(skip).limit(pageSize);

    return new NextResponse(JSON.stringify(projects));
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
