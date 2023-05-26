import { Request, Response } from 'express';
import { prisma } from '../database';

export class ProdutoController {
  async findAll(request: Request, response: Response) {
    try {
      const produtos = await prisma.produto.findMany({ include: { categoria: true } });
      response.json(produtos);
    } catch (error) {
      response.status(400).json({ error });
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await prisma.produto.findUnique({
        where: { id: Number(id) },
        include: { categoria: true }
      });
      response.json(produto);
    } catch (error) {
      response.status(500).json({ error });
    }
  }

  async create(request: Request, response: Response) {
    try {
      const { nome, preco, categoriaId, imagem, descricao } = request.body;
      const produto = await prisma.produto.create({
        data: { nome, preco, categoriaId, imagem, descricao },
        include: { categoria: true }
      });
      response.json(produto);
    } catch (error) {
      response.status(500).json({ error });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { nome, preco, categoriaId, imagem, descricao } = request.body;
      const produto = await prisma.produto.update({
        where: { id: Number(id) },
        data: { nome, preco, categoriaId, imagem, descricao },
        include: { categoria: true }
      });
      response.json(produto);
    } catch (error) {
      response.status(500).json({ error });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await prisma.produto.delete({
        where: { id: Number(id) }
      });
      response.json({ mensagem: `Produto ${id} removido com sucesso!` });
    } catch (error) {
      response.status(500).json({ error });
    }
  }
}
