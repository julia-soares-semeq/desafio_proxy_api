from fastapi import Depends, HTTPException, Header, APIRouter, Query
from typing import Optional
from dotenv import load_dotenv
from errors import messages
import os 
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import httpx


router = APIRouter()
security = HTTPBearer()
load_dotenv(dotenv_path='C:\\Users\\TESTE\\Documents\\desafio\\app\\core\\url.env')


@router.get("/usercorp")
async def retrieve_user_data(credentials: HTTPAuthorizationCredentials = Depends(security)):
    url_usercorp = os.getenv("url_usercorp")

    token = credentials.credentials

    headers = {"Authorization": f"Bearer {token}"}
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url_usercorp, headers=headers)
        if response.status_code ==200:
            return response.json()
        if response.status_code != 200:
            raise HTTPException(status_code = 401, detail=messages.unauthorized_usercorp)

@router.get("/tree")
async def tree_ativos(site: int = Query(...), revision: int = Header(...), credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    url_tree = os.getenv("url_tree")
    headers = {"revision": revision}

    headers = {"Authorization": f"Bearer {token}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url_tree,params={"site": site}, headers=headers)
        if response.status_code ==200:
            return response.json()
        if response.status_code != 200:
            raise HTTPException(status_code = 401, detail=messages.response_tree)
    
@router.get("/info")
async def info_ativos(site: int, id:int = Header(...), device_type: Optional[int] = Header(default=None), credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    headers = {"id": id}
    url_tree = os.getenv("url_info")

    headers = {"Authorization": f"Bearer {token}"}
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url_tree,params={"site": site}, headers=headers)
        if response.status_code ==200:
            return response.json()
        if response.status_code != 200:
            raise HTTPException(status_code = 401, detail=messages.bad_request_info)