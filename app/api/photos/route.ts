// app/api/photos/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const mediaDirectory = path.join(process.cwd(), 'public/media');

    try {
        const filenames = fs.readdirSync(mediaDirectory);
        // Filter out hidden files (like .DS_Store) and keep only images
        const images = filenames.filter(file =>
            /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
        ).map(name => `/media/${name}`);

        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.json({ error: "Failed to read directory" }, { status: 500 });
    }
}