import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    const postId = req.nextUrl.searchParams.get("id");
    const sessionData = await req.headers.get("Session");
    const session = JSON.parse(sessionData);
    await connectMongoDB();

    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return new NextResponse("Post is already deleted", { status: 400 });
    }

    return new NextResponse("Post deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
