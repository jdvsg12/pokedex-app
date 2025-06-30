import { Badge } from "../ui/badge";

interface StatBadgeProps {
    value: number;
    thresholds?: {
        high: number;
        low: number;
    };
    children?: React.ReactNode;
}

export function StatBadge({ value, thresholds = { high: 100, low: 50 }, children }: StatBadgeProps) {
    let variant: "default" | "secondary" | "destructive" = "secondary";

    if (value >= thresholds.high) {
        variant = "default"; // green (primary)
    } else if (value <= thresholds.low) {
        variant = "destructive"; // red
    }
    return (
        <Badge variant={variant}>
            {children ?? value}
        </Badge>
    );
} 