import { Request, Response } from 'express';
import { prisma } from '../database';

export class CategoriaController {
  async findAll(request: Request, response: Response) {
    try {
      const categorias = await prisma.categoria.findMany();
      response.json(categorias);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const categoria = await prisma.categoria.findUnique({
        where: { id: Number(id) }
      });
      response.json(categoria);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  }

  async create(request: Request, response: Response) {
    try {
      const { descricao } = request.body;
      const categoria = await prisma.categoria.create({ data: { descricao } });
      response.json(categoria);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { descricao } = request.body;
      const categoria = await prisma.categoria.update({
        where: { id: Number(id) },
        data: { descricao }
      });
      response.json(categoria);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const categoria = await prisma.categoria.delete({
        where: { id: Number(id) }
      });
      response.json({ mensagem: `Categoria ${id} removida com sucesso!` });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  }
}
