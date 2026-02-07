"use client"

import { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Simple Avatar component wrapper since we might not have one in shadcn/ui yet
// Actually, let's just make a simple one or use basic img tag if shadcn component is missing
// Checking list_dir earlier, I didn't see avatar.tsx in components/ui, so I'll implement a basic one here or reuse the image.

export function ProfileForm() {
    const { user, updateUser } = useUser();
    const [formData, setFormData] = useState(user);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser(formData);
        setIsEditing(false);
    };

    if (!isEditing) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>View and manage your profile details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-primary/10">
                            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{user.name}</h3>
                            <p className="text-muted-foreground">{user.email}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Bio</h4>
                        <p className="text-muted-foreground">{user.bio}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your personal information.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="avatar">Avatar URL</Label>
                        <Input
                            id="avatar"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            placeholder="https://..."
                        />
                    </div>
                    <div className="flex gap-4 items-center mb-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden border">
                            <img src={formData.avatar} alt="Preview" className="h-full w-full object-cover" />
                        </div>
                        <span className="text-sm text-muted-foreground">Preview</span>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <textarea
                            id="bio"
                            name="bio"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={formData.bio}
                            onChange={handleChange}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button type="submit">Save Changes</Button>
                    <Button type="button" variant="outline" onClick={() => {
                        setFormData(user); // Reset changes
                        setIsEditing(false);
                    }}>Cancel</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
