import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    const userId = req.nextUrl.searchParams.get("id");
    const sessionData = await req.headers.get("Session");
    const session = JSON.parse(sessionData);
    await connectMongoDB();

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return new NextResponse("User is already deleted", {
        status: 400,
      });
    }
    await Post.deleteMany({ author: deletedUser.username });

    return new NextResponse("User has been deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
