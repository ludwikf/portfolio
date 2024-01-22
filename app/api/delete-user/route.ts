import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    const userId = req.nextUrl.searchParams.get("id");
    const sessionData = await req.headers.get("Session");
    await connectMongoDB();

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return new NextResponse("User is already deleted", {
        status: 400,
      });
    }

    return new NextResponse("User has been deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
