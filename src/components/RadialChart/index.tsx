import { ResponsiveContainer, RadialBarChart, PolarRadiusAxis, Label, RadialBar } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp } from "lucide-react";

const RadialChart = () => {
    return (
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "#8b5cf6",
            },
          }}
          className="mx-auto flex items-center justify-center aspect-square w-full max-w-[30vh]"
        >
          <RadialBarChart
            data={[{ month: "january", desktop: 1260, mobile: 570 }]}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    const total = 1260 + 570
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} fill="white" textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                  return null
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
    );
}

export default RadialChart;