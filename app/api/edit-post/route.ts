import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const { title, content, image, session } = await req.json();
    await connectMongoDB();
    const savedPost = await Post.findByIdAndUpdate(id, {
      title: title,
      content: content,
      image: image,
    });
    if (!savedPost) {
      return new NextResponse("Updating error", { status: 400 });
    }

    return new NextResponse("Post updated", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
