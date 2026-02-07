import { Metadata } from "next";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { OrderHistory } from "@/components/profile/OrderHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
    title: "My Profile - WoofWise",
    description: "Manage your profile and orders.",
};

export default function ProfilePage() {
    return (
        <div className="container mx-auto py-10 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-primary">My Profile</h1>

                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="account">Account Details</TabsTrigger>
                        <TabsTrigger value="orders">Order History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <ProfileForm />
                    </TabsContent>
                    <TabsContent value="orders">
                        <OrderHistory />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
