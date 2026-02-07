"use client"

import { useUser } from '@/context/UserContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Missing Badge component? I'll use a simple span with classes if Badge isn't available, 
// or I'll implement Badge. Let's assume standard shadcn/ui components exist or I can make do.
// Checking file list... Badge isn't in the list I saw earlier (accordion, button, card, input, progress, separator, sheet).
// I'll stick to standard tailwind classes for the badge look to avoid errors.

export function OrderHistory() {
    const { orders } = useUser();

    if (orders.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>No orders found.</CardDescription>
                </CardHeader>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Review your past purchases.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-semibold">{order.id}</h4>
                                <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                }`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="space-y-1">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                    <span>{item.quantity}x {item.name}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-2 border-t flex justify-between font-medium">
                            <span>Total</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
