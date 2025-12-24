'use client';

import { PieChart, Pie, Cell } from 'recharts';
import { ParsedIngredient } from '@/types/drink';
import styles from './IngredientPieChart.module.css';

interface IngredientPieChartProps {
  ingredients: ParsedIngredient[];
}

export function IngredientPieChart({ ingredients }: IngredientPieChartProps) {
  const ingredientsWithAmount = ingredients.filter(
    (ingredient) => ingredient.amount > 0
  );

  return (
    <div className={styles.pieChartContainer}>
      <PieChart width={120} height={120}>
        <Pie
          data={ingredientsWithAmount}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
        >
          {ingredientsWithAmount.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
