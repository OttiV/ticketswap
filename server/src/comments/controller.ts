import {
  JsonController,
  Authorized,
  Post,
  Param,
  HttpCode,
  NotFoundError,
  Get,
  Put,
  Body
} from "routing-controllers";
import { Comment } from "./entity";
import { io } from "../index";


@JsonController()
export default class CommentController {
  @Get("/comments")
  getComments() {
    return  Comment.find()
  }

  @Get("/comments/:id([0-9]+)")
  getComment(@Param("id") id: number) {
    return Comment.findOneById(id);
  }

  @Authorized()
  @Post("/comments")
  @HttpCode(201)
  createComment(@Body() comment: Comment) {
    return comment.save();
  }

  @Authorized()
  @Put("/comments/:id")
  async updateComment(
    @Param("id") id: number,
    @Body() update: Partial<Comment>
  ) {
    const comment = await Comment.findOneById(id);
    if (!comment) throw new NotFoundError("Cannot find comment");
    return Comment.merge(comment, update).save();
  }
}
