import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET /api/posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

// POST /api/posts
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const json = await request.json();
    const post = await prisma.post.create({
      data: {
        title: json.title,
        content: json.content,
        authorId: session.user.id,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
