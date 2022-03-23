/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, Router } from "express";

import ContactsDAL from "./contacts.dal";
import ContactsService from "./contacts.service";

const router = Router();
const contactsService = new ContactsService(new ContactsDAL());

router.get("/contacts", async (req: Request, res: Response) => {
  const { error, data }: any = await contactsService.getContacts();

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.get(
  "/contacts/search/:userId/:searchText",
  async (
    {
      params
    }: Request<{
      searchText: string;
      userId: string | number;
    }>,
    res: Response
  ) => {
    const { error, data }: any =
      await contactsService.getContactsWithSearchText(params);

    if (error) {
      return res.status(500).send(error);
    }

    res.status(200).send({ success: true, data });
  }
);

router.get("/contact/:id", async (req: Request, res: Response) => {
  const { error, data }: any = await contactsService.getContactById(req.params);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.post("/contact", async (req: Request, res: Response) => {
  const { error, data }: any = await contactsService.createContact(req.body);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.put("/contact", async (req: Request, res: Response) => {
  const { error, data }: any = await contactsService.updateContact(req.body);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.delete("/contact/:id", async (req: Request, res: Response) => {
  const { error, data }: any = await contactsService.deleteContactById(
    req.params
  );

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.get("/contactsByUserId/:userId", async (req: Request, res: Response) => {
  const { error, data }: any = await contactsService.getContactsByUserId(
    req.params
  );

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

export default router;
