from fastapi import FastAPI, Depends, HTTPException, Header
from fastapi.security import HTTPBasic,HTTPBearer, HTTPBasicCredentials, HTTPAuthorizationCredentials
import httpx
from fastapi.middleware.cors import CORSMiddleware
from app.routers import post, get


app = FastAPI()
security = HTTPBearer()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            
    allow_credentials=True,
    allow_methods=["*"],       
    allow_headers=["*"],         
)

app.include_router(post.router)
app.include_router(get.router)