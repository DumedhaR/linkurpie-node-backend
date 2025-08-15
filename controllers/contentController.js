export const createContent = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "created",
  });
};

export const getContent = (req, res) => {
  res.status(200).json({
    status: "success",
    data: `content id ${req.params.id} gose here`,
  });
};

export const updateContent = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "updated",
  });
};

export const deleteContent = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "deleted",
  });
};
