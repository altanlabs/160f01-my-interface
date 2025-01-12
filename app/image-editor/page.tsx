import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function ImageEditorPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleImageEdit = async () => {
    // Placeholder for AI model integration
    alert('Edit image using AI model');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md p-4">
        <h2 className="text-xl font-bold mb-4">Image Upload and Edit</h2>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {preview && (
          <div className="mt-4">
            <img src={preview} alt="Preview" className="w-full h-auto" />
          </div>
        )}
        <Button onClick={handleImageEdit} className="mt-4">Edit Image</Button>
      </Card>
    </div>
  );
}