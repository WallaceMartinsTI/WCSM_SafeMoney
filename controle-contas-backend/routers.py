from rest_framework import routers
from crud.viewsets import CostsViewSet

router = routers.SimpleRouter()
router.register(r"main", CostsViewSet, basename="main")
