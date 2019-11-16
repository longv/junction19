import { variables } from '../styles/variables'

export const assignVisitorStatusColor = (type) => {
  switch (type) {
    case "Very busy":
      return variables.colors.red;
    case "Busy":
      return variables.colors.orange;
    case "Moderate":
      return variables.colors.yellow;
    case "Low":
      return variables.colors.blue;
    case "Very low":
      return variables.colors.green;
    default:
      return;
  }
}
