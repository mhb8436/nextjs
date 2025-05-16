import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET /api/posts/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching post" }, { status: 500 });
  }
}

// PUT /api/posts/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const json = await request.json();
    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        title: json.title,
        content: json.content,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Error updating post" }, { status: 500 });
  }
}

// DELETE /api/posts/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.post.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Post deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 });
  }
}
