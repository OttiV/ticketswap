import {
    JsonController,
    Authorized,
    CurrentUser,
    Post,
    Param,
    BadRequestError,
    HttpCode,
    NotFoundError,
    ForbiddenError,
    Get,
    Put,
    Body,
    Patch
  } from "routing-controllers";
  import User from "../users/entity";
  import { Comment } from "./entity";
  import { io } from "../index";
  // import { IndexMetadata } from 'typeorm/metadata/IndexMetadata';
  
  @JsonController()
  export default class CommentController {
    // @Get("/comments")
    // async allComments() {
    //   const comments = await Comment.find();
    //   return { comments };
    // }

    @Get("/comments/:id([0-9])")
    getComment(@Param("id") id: number) {
      return Comment.findOneById(id);
    }
  
    @Authorized()
    @Post("/comments")
    @HttpCode(201)
    // async 
    createComment(@Body() comment: Comment) {
      // const entity = await Comment.create().save();

      // const comment = await Comment.findOneById(entity.id);
      
      io.emit("action", {
        type: "ADD_COMMENT",
        payload: comment
      });
      
      return comment.save();
    }
  
    //Put request functional
    @Authorized()
    @Put("/comments/:id")
    async updateComment(@Param("id") id: number, @Body() update: Partial<Comment>) {
      const comment = await Comment.findOneById(id);
      if (!comment) throw new NotFoundError("Cannot find comment");
      io.emit("action", {
        type: "UPDATE_COMMENT",
        payload: await Comment.findOneById(comment.id)
      });
      return Comment.merge(comment, update).save();
    }
  }
  