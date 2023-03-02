module.exports = (req, res, next) => {
	try{
		const host = req.get('host');
		const title = req.body.title.trim() ?? undefined;
		const categoryId = parseInt(req.body.category) ?? undefined;
		const userId = req.auth.userId ?? undefined;
		const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}` ?? undefined;
		console.log("host",host,"title",title,"categoryId",categoryId,"imageUrl",imageUrl,"on test");
	if (title !== undefined &&
		title.length > 0 &&
		categoryId !== undefined &&
		categoryId > 0 &&
		userId !== undefined &&
		userId > 0 &&
		imageUrl !== undefined) {
	  console.log('All required fields are present.');
	} else {
	  console.log('Some required fields are missing.');
	}
	
		if(title !== undefined &&
			title.length > 0 &&
			categoryId !== undefined &&
			categoryId > 0 &&
			userId !== undefined &&
			userId > 0 &&
			imageUrl !== undefined){
			req.work = {title, categoryId, userId, imageUrl}
			next()
		}else{
			return res.status(400).json({error: new Error("Bad Request")})
		}
	}catch (error) {
		console.error(error);
		const errorMessage = `Error in check work middleware: ${error.message}`;
		return res.status(500).json({ error: errorMessage });
	  }

}
