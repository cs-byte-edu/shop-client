import { forwardRef } from "react";

export const Button = forwardRef(
  (
    {
      type = "button",
      variant = "primary",
      size = "medium",
      disabled = "false",
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyle = ["inline-flex", "items-center", "justify-center"];

    const variants = {
      primary: [],
      outlined: [],
      danger: [],
      success: [],
    };

    const sizes = {};

    const buttonClasses = [...baseStyle, ...variants[variant], ...sizes[size]];

    return (
      <button
        className={`${buttonClasses}`}
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

/* 
**Так, абсолютно є сенс** створювати компонент Button! Це одна з найважливіших частин design system. Ось чому:## Переваги створення компонента Button:

### 1. **Консистентність дизайну**
- Всі кнопки виглядають однаково
- Єдиний стиль в усьому додатку
- Легко змінити стиль глобально

### 2. **DRY принцип**
- Уникнення дублювання коду
- Єдине місце для всієї логіки кнопок
- Менше помилок та багів

### 3. **Доступність (A11y)**
```jsx
// Автоматично додаються потрібні атрибути
<Button disabled loading>
  // aria-disabled, proper focus management
</Button>
```

### 4. **Легке тестування**
```jsx
// Один набір тестів для всіх кнопок
test('Button handles click events', () => {
  // ...
});
```

### 5. **Гнучкість**
```jsx
// Можна легко розширювати
<Button 
  variant="primary" 
  size="large" 
  loading={isSubmitting}
  startIcon={<Icon />}
>
  Submit
</Button>
```

### 6. **Для вашого Product компонента**

**Замість:**
```jsx
<button className="btn-buy" onClick={onBuy}>Купити</button>
<button className="overlay-btn" onClick={onWishList}>♡</button>
```

**Краще:**
```jsx
<BuyButton onBuy={onBuy} loading={isLoading} />
<WishListButton onAddToWishList={onWishList} isInWishList={inWishList} />
```

### 7. **Типізація (TypeScript)**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  // автокомпліт та type safety
}
```

### 8. **Легка кастомізація**
```jsx
// Можна перевизначити стилі
<Button className="my-custom-class" variant="primary">
  Custom Button
</Button>
```

**Висновок:** Button компонент - це фундамент будь-якого UI. Він забезпечує консистентність, зменшує дублювання коду та полегшує підтримку. Обов'язково створюйте!
*/
