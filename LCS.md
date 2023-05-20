# LCS Take Home Test

## Installation

```bash
docker-compose up
```

## Summary

As part of the MVP for the LCS Take Home Test I created a DataTable component with pagenation and sorting functionality. I have added the following:

1. Atomic Design with DUCKs Component Design Pattern to organize separation of concerns across frontend component and functionality
2. The tailwind css library

## Here is a quick tour

### The Ducks Pattern

A thoughtful and opinionated method of organizing component structure down to the tiniest atomic component

```bash
features/
├─ DataTable/
│  ├─ components/
│  │  ├─ TableHeader/
│  │  │  ├─ TableHeader.tsx
│  │  │  ├─ index.ts
│  ├─ DataTable.types.ts
│  ├─ index.ts
│  ├─ DataTable.tsx
├─ Paging/
│  ├─ components/
│  │  ├─ Pager/
│  │  │  ├─ Pager.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ Pager.hooks.ts
│  ├─ Paging.tsx
│  ├─ index.ts
```

### The Data Flow

```bash
The raw data is fetched in the App component
|
|_ The raw data is passed to a function to flatten and extract a reduced
   set of fields in a simple util function in DataTable.utils.ts
 |
 |_ The data is set in state and passed down
  --------> <DataTable data={data} />
   |
   |_ This is where all the magic happens DataTable
      has several child components which manage the state of things
     |
     |_<TableHeader />
       |_ This renders the table header columns - a user clicks each one to sort the overall data set by each headers
           respective sort keys
     |
     |_<Paging />
       |_ This renders a single page where a user can view a tabular view of the data
     |
     |_<Pager />
       |_ This renders the standard page control which a user clicks to move back and forth through the dataset
       |_ Pager.hooks.ts - a custom hook responsible for emitting the data which controls the state of the Pager
                            elements

```

## If I had another 8 hours I would accomplish the following

### Most Important

1. Unit Testing for both Frontend and Backend
2. Splunk Logging for Front and Backend to track errors, page and api traffic, cpu usage
3. Linting and Prettier installation

### On the frontend:

1. Bind the result fetch to URL query parameters - enables ability to favorite and/or share specific result sets
2. Redux in order to improve the Developer experience and work flow (DX) - enables debugging, fast-forwarding and re-winding of state mutation
3. Mobile first responsive design
4. Middleware which provides click tracking for analytics and usage
5. A story book to highlight and standardize the component functionality
6. A basic detail page and/or some additional functionality enabling some interesting action to be committed upon each member - to be determined
7. Bind the result fetch to URL query parameters - enables ability to favorite and/or share specific result sets
8. Redux in order to improve the Developer experience and work flow (DX) - enables debugging, fast-forwarding and re-winding of state mutation
9. Mobile first responsive design
10. Middleware which provides click tracking for analytics and usage
11. A story book to highlight and standardize the component functionality

### On the backend:

1. APIs to support each functionality, in order to allow the result set to be bound to URL query parameters

    1. Pagenation
    2. Sorting
    3. Filtering
    4. Search

2. Elastic search will optimize the list speed for the search results
3. GraphQL as orchestration layer will keep the frontend agnostic from the backend
4. A system diagram which will illustrate the simple flow of the system architecture
