// import {
//   JsonController,
//   Authorized,
//   CurrentUser,
//   Post,
//   Param,
//   BadRequestError,
//   HttpCode,
//   NotFoundError,
//   ForbiddenError,
//   Get,
//   Body,
//   Patch
// } from "routing-controllers";
// import FraudRisk from "../fraudRisks/entity";
// // import { Game, Player, Board, Word } from "./entities";
// import { io } from "../index";

// @JsonController()
// export default class FraudriskController {
//   @Get("/fraudrisk")
//   @HttpCode(201)
//   async createFraudrisk(@CurrentUser() user: User) {
//     function createRandomBoard() {
//       const board: string[][] = [];
//       for (let rowIndex = 0; rowIndex < 12; rowIndex++) {
//         const row: string[] = [];
//         for (let columnIndex = 0; columnIndex < 12; columnIndex++) {
//           const randomLetterIndex = Math.floor(Math.random() * letters.length);
//           const randomLetter = letters[randomLetterIndex];
//           row.push(randomLetter);
//         }
//         board.push(row);
//       }
//       return board;
//     }