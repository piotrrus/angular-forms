# Angular

## Some ideas how to not repeat your code (keep DRY)

A most common mistakes while creating Angular apps is:
- Lack of component inheritance
- Error field messages in html part of component is a usual string.
- Forms are placed into component

## Lack of component inheritance

## Error field messages
- Put all error messages to one file
- Use Services to provide Reactive Form Field Errors

## Forms
- Move your forms to separate class
- Treat your component as controller in MVC pattern
