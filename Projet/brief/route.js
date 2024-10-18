const routes = [
    {
        name: "Home",
        path: "/",
        methods: ['HEAD', 'GET'],
        controller: functionHome()
    },

    { name: "books:index",  path: "/books",             methods:['HEAD', 'GET'],            controller: fncGetAllBooks() },
    { name: "books:create", path: "/books/create",      methods:['HEAD', 'GET', 'POST'],    controller: fncCreateNewBook() },
    { name: "books:read",   path: "/books/:id",         methods:['HEAD', 'GET'],            controller: fncReadBook(id) },
    { name: "books:update", path: "/books/:id/edit",    methods:['HEAD', 'GET', 'POST'],    controller: fncUpdateBook(id) },
    { name: "books:delete", path: "/books/:id/delete",  methods:['HEAD', 'GET', 'POST'],    controller: fncDeleteBook(id) },

    { name: "book:index",   path: "/books",             methods:['HEAD', 'GET'],            controller: fncGetAllBooks() },
    { name: "book:create",  path: "/book",              methods:['HEAD', 'GET', 'POST'],    controller: fncCreateNewBook() },
    { name: "book:read",    path: "/book/:id",          methods:['HEAD', 'GET'],            controller: fncReadBook(id) },
    { name: "book:update",  path: "/book/:id/edit",     methods:['HEAD', 'GET', 'POST'],    controller: fncUpdateBook(id) },
    { name: "book:delete",  path: "/book/:id/delete",   methods:['HEAD', 'GET', 'POST'],    controller: fncDeleteBook(id) },

    { name: "books:index",  path: "/books",             methods:[ 'GET'],                   controller: fncGetAllBooks() },
    { name: "books:create", path: "/books",             methods:[ 'POST'],                  controller: fncCreateNewBook() },
    { name: "books:read",   path: "/books/:id",         methods:[ 'GET'],                   controller: fncReadBook(id) },
    { name: "books:update", path: "/books/:id",         methods:[ 'PUT'],                   controller: fncUpdateBook(id) },
    { name: "books:update", path: "/books/:id",         methods:[ 'PATCH'],                 controller: fncPatchBook(id) },
    { name: "books:delete", path: "/books/:id",         methods:[ 'DELETE'],                controller: fncDeleteBook(id) },
    
    { name: "NotFount", path: "**",                     methods:[],                controller:  },

];