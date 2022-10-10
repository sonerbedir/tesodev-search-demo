import { render, screen } from "@testing-library/react";
import { Header } from "../Header";


test('Input change correctly', () => {
    render(<Header/>)
    const inputEl = screen.getByTestId('searchInput');

    expect(inputEl).toHaveValue("");
})