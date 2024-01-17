import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const userId = req.nextUrl.searchParams.get("id");
    const { session } = await req.json();
    await connectMongoDB();

    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse("User not found", { status: 400 });
    }

    if (user.role === "user") {
      user.role = "admin";
    } else if (user.role === "admin") {
      user.role = "user";
    }

    const updatedUser = await user.save();

    if (!updatedUser) {
      return new NextResponse("User updating role Error", { status: 400 });
    }

    return new NextResponse("User updated", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
