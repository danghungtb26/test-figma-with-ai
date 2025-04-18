# Guidelines for Code Generation with GitHub Copilot

## General Rules

1. **Write Clear Comments**

   - Use descriptive comments to guide Copilot
   - Start with a clear problem statement
   - Break down complex requirements into smaller tasks

2. **Code Structure**

   - Follow project's coding style and conventions
   - Use meaningful variable and function names
   - Keep functions focused and single-purpose
   - Include proper error handling

3. **Best Practices**

   - Review generated code before accepting
   - Test the generated code
   - Ensure proper documentation
   - Follow security best practices

4. **Type Safety**

   - Use type annotations when possible
   - Validate input parameters
   - Define clear interfaces and types

5. **Code Quality**
   - Maintain code readability
   - Follow DRY (Don't Repeat Yourself) principle
   - Keep code modular and maintainable
   - Use appropriate design patterns

## Best Practices and Standards

1. **Code Review Checklist**

   - Verify generated code meets project requirements
   - Check for proper error handling
   - Ensure code follows team's style guide
   - Validate performance implications

2. **Testing Guidelines**

   - Write unit tests for generated code
   - Include edge case testing
   - Implement integration tests where necessary
   - Document test scenarios

3. **Version Control**
   - Create meaningful commit messages
   - Review changes before committing
   - Keep commits atomic and focused
   - Document significant changes

## Example Usage

```typescript
// Bad: Vague comment
// do something with user

// Good: Clear, specific comment
// Validate user input and create new user profile with email and password
```

## File Naming Conventions

1. **React Components**
   - Use kebab-case for file names
   - Add `.tsx` extension for TypeScript React components
   - Examples:
     - `header-navigation.tsx`
     - `user-profile-card.tsx`
     - `auth-form.tsx`
   - Component name should be PascalCase in the code
     - File: `product-list.tsx`
     - Component: `ProductList`

## Tailwind CSS Guidelines

1. **Class Organization**

   - Group related classes together
   - Order: layout → spacing → sizing → typography → visual styles
   - Example:
     ```tsx
     className =
       'flex items-center justify-between px-4 py-2 w-full text-sm font-medium bg-gray-100';
     ```

2. **Responsive Design**

   - Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
   - Mobile-first approach
   - Example:
     ```tsx
     className = 'w-full md:w-1/2 lg:w-1/3';
     ```

3. **Custom Components**
   - Use @apply for repeated class combinations
   - Create consistent component styles
   - Example:
     ```css
     .btn-primary {
       @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600;
     }
     ```

## Ant Design (antd) Guidelines

1. **Component Usage**

   - Import components individually for better tree-shaking
   - Example:
     ```tsx
     import { Button, Form, Input } from 'antd';
     ```

2. **Theme Customization**

   - Use ConfigProvider for global theme changes
   - Define token overrides in a central location
   - Example:

     ```tsx
     import { ConfigProvider } from 'antd';

     const themeConfig = {
       token: {
         colorPrimary: '#00b96b',
         borderRadius: 4,
       },
     };
     ```

3. **Form Handling**

   - Use Form.useForm() hook for form operations
   - Implement form validation using antd's built-in validators
   - Example:
     ```tsx
     const [form] = Form.useForm();
     ```

4. **Layout Structure**

   - Use Layout components for consistent page structure
   - Stick to antd's grid system (Row/Col) for layouts
   - Example:
     ```tsx
     import { Layout, Row, Col } from 'antd';
     const { Header, Content, Footer } = Layout;
     ```

5. **Component Integration**
   - Combine antd with Tailwind for custom styling when needed
   - Use antd's built-in props before custom solutions
   - Maintain consistent component usage across the project

## Security Considerations

- Never include sensitive information in comments
- Review generated code for security vulnerabilities
- Validate all inputs and sanitize data
- Follow secure coding guidelines

## Troubleshooting

1. **Common Issues**
   - Document known limitations
   - List workarounds for common problems
   - Provide debugging tips
   - Include contact for support

## Maintenance

- Keep comments up-to-date
- Document any manual modifications to generated code
- Regular review and refactoring of generated code
