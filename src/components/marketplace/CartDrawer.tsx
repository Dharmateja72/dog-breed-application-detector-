"use client"

import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export function CartDrawer() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalItems,
        isCartOpen,
        toggleCart
    } = useCart();

    return (
        <Sheet open={isCartOpen} onOpenChange={toggleCart}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground animate-in zoom-in">
                            {totalItems}
                        </span>
                    )}
                    <span className="sr-only">Open cart</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-md">
                <SheetHeader className="px-1">
                    <SheetTitle className="flex items-center gap-2 text-xl">
                        <ShoppingBag className="text-primary" />
                        Your Cart ({totalItems})
                    </SheetTitle>
                </SheetHeader>

                <Separator className="my-4" />

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center flex-1 space-y-4 opacity-50">
                        <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
                        <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
                        <Button variant="outline" onClick={toggleCart}>
                            Start Shopping
                        </Button>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 -mx-6 px-6">
                            <div className="space-y-6 pb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between text-base font-medium">
                                                <h3 className="line-clamp-2 text-sm">{item.name}</h3>
                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <div className="flex items-center gap-1 border rounded-md">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-none"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-none"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="space-y-4 pt-6 bg-background">
                            <Separator />
                            <div className="flex items-center justify-between text-base font-medium">
                                <span>Total</span>
                                <span className="text-xl text-primary">${totalPrice.toFixed(2)}</span>
                            </div>
                            <SheetFooter>
                                <Button className="w-full" size="lg">
                                    Checkout
                                </Button>
                            </SheetFooter>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
