import Post from "./Post.js";
import FileService from "./fileService.js";
// import fs from "fs";

class PostService {
  async create(post, picture) {
    const fileName = FileService.saveFile(picture, post.nickname);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post, picture) {
    const fileName = FileService.saveFile(picture, post.body.nickname);
    const updatedPost = await Post.findByIdAndUpdate(post.params.id, {
      ...post.body,
      picture: fileName,
    });
    return updatedPost;
  }

  async delete(id, name) {
    if (!id) {
      throw new Error("не указан ID");
    }
    // FileService.deleteFile(name);
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
