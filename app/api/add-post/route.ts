import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const { title, content, author, image, session } = await req.json();
    await connectMongoDB();

    const newPost = new Post({
      title,
      content,
      author,
      image,
    });

    const savedPost = await newPost.save();

    if (!savedPost) {
      return new NextResponse("Error saving post", { status: 400 });
    }

    return new NextResponse("Post created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
